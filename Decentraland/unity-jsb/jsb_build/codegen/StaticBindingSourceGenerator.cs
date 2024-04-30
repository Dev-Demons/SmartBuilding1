﻿using System;
using Microsoft.CodeAnalysis;

namespace QuickJS.Experimental
{
    /// <summary>
    /// Generates glue code for static binding with Roslyn source generator
    /// </summary>
    [Generator]
    class StaticBindingSourceGenerator : ISourceGenerator
    {
        public void Initialize(GeneratorInitializationContext context)
        {
        }

        public void Execute(GeneratorExecutionContext context)
        {
            context.AddSource("jsb.autogen.cs", $@"
                using System;
                namespace AutoGenerated {{
                    public class Example {{
                        public static string Test1() => ""Hello, AutoGenerated."";
                    }}
                }}
            ");
        }
    }
}
