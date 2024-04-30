@echo off

SET BASE_PATH=%~dp0
SET BUILD_PATH=%~dp0..\out\sqlite3
echo %BUILD_PATH%
REM cmake -G "Visual Studio 15 2017 Win64" ..\..\..

mkdir %BUILD_PATH% 2>nul
cd %BUILD_PATH%

REM rd /s /q x64_Debug 2>nul
REM echo building x64_Debug
REM mkdir x64_Debug
REM cd x64_Debug
REM cmake -G "Visual Studio 16 2019" -A x64 ..\..\..\sqlite3
REM cd %BUILD_PATH%
REM cmake --build x64_Debug --config Debug
REM mkdir ..\..\prebuilt\Plugins\x64\
REM xcopy /Y .\x64_Debug\Debug\sqlite3.dll ..\..\prebuilt\Plugins\x64\

rd /s /q x64_release 2>nul
echo building x64_release
mkdir x64_release
cd x64_release
cmake -G "Visual Studio 16 2019" -A x64 ..\..\..\sqlite3
cd %BUILD_PATH%
cmake --build x64_release --config Release
mkdir ..\..\prebuilt\Plugins\x64\
xcopy /Y .\x64_release\Release\sqlite3.dll ..\..\prebuilt\Plugins\x64\

rd /s /q x86_release 2>nul
echo building x86_release
mkdir x86_release
cd x86_release
cmake -G "Visual Studio 16 2019" -A Win32 ..\..\..\sqlite3
cd %BUILD_PATH%
cmake --build x86_release --config Release
mkdir ..\..\prebuilt\Plugins\x86\
xcopy /Y .\x86_release\Release\sqlite3.dll ..\..\prebuilt\Plugins\x86\

cd %BASE_PATH%
