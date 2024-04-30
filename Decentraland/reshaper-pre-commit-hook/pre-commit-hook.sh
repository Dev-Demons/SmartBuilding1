#!/bin/sh
# Exit on error
# exit when any command fails
set -e
set -o pipefail
# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
# echo an error message before exiting
trap 'echo "\"${last_command}\" command filed with exit code $?."' ERR
# - Actual script

IS_MERGE_COMMIT=$(git rev-parse -q --verify MERGE_HEAD) || true
if [[ -n "$IS_MERGE_COMMIT" ]] 
then
	echo "Skipping pre-commit hook in merge-commit"
	exit 0
fi

if [[ "$OSTYPE" != "msys"* && "$OSTYPE" != "cygwin" ]] ; then
    STAGED_FILES=`git diff --name-only --cached --diff-filter=d | gsed ':a;N;$!ba;s/\n/;/g'`
else
    STAGED_FILES=`git diff --name-only --cached --diff-filter=d | sed ':a;N;$!ba;s/\n/;/g'`
fi
echo "Staged files ${STAGED_FILES}"
# Build edit string, by replacing newlines with semicolons.
# --diff-filter=d only filters files that are not deleted, which means we won't have trouble adding them afterwards
if [[ "$OSTYPE" != "msys"* && "$OSTYPE" != "cygwin" ]] ; then
    INCLUDE_STRING=`git diff --name-only --cached --diff-filter=d | gsed ':a;N;$!ba;s/\n/;/g'`
else
    INCLUDE_STRING=`git diff --name-only --cached --diff-filter=d | sed ':a;N;$!ba;s/\n/;/g'`
fi
# The --include option requires paths relative to the solution, we replace the path to it  
INCLUDE_STRING_FILTERED=${INCLUDE_STRING//unity-renderer\//}
echo "Include string: $INCLUDE_STRING_FILTERED"
# If the include string is empty, we're done. This happens e.g. if the commit only consists of deleted files.
if [[ -z "$INCLUDE_STRING_FILTERED" ]]
then
    echo "No files to change"
    exit 0
fi
# Edit your project files here
echo "Formatting files..."
SOLUTION_FILE=$(find . -type f -name "unity-renderer.sln")
if [[ "$OSTYPE" == "msys"* ]]; then
    # Lightweight shell and GNU utilities compiled for Windows (part of MinGW)
    ./.git/hooks/resharper/cleanupcode.exe --settings="./unity-renderer/unity-renderer.sln.DotSettings" --profile="Reformat Code DCL" ./unity-renderer/unity-renderer.sln --include="$INCLUDE_STRING_FILTERED" || true
elif [[ "$OSTYPE" == "cygwin" ]]; then
    #Cygwin terminal emulator
    ./.git/hooks/resharper/cleanupcode.exe --settings="./unity-renderer/unity-renderer.sln.DotSettings" --profile="Reformat Code DCL" ./unity-renderer/unity-renderer.sln --include="$INCLUDE_STRING_FILTERED" || true
else
    sh ./.git/hooks/resharper/cleanupcode.sh --settings="./unity-renderer/unity-renderer.sln.DotSettings" --profile="Reformat Code DCL" ./unity-renderer/unity-renderer.sln --include="$INCLUDE_STRING_FILTERED" || true
fi
# Restage files
echo "Restaging files: $STAGED_FILES"
IFS=';' read -ra ADDR <<< "$STAGED_FILES"
for i in "${ADDR[@]}"; do
    git add "$i"
done
echo "pre-commit hook finished"