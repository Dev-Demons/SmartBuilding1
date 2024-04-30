using QuickJS;
using System;

namespace Example.New.World
{
    /// <summary>
    /// demonstrates nested types
    /// </summary>
    [JSType]
    public class Galaxy
    {
        public static string GetName() { return nameof(Galaxy); }

        [JSType]
        public class Sun
        {
            public static string GetName() { return nameof(Sun); }
        }

        [JSType]
        public class Earth
        {
            public static string GetName() { return nameof(Earth); }

            public Sun GetSun() { return new Sun(); }

            public Continent[] GetContinents() { return new Continent[] { new Continent(), new Continent() }; }

            [JSType]
            public class Ocean
            {
                public static string GetName() { return nameof(Ocean); }
            }

            [JSType]
            public class Continent
            {
                public static string GetName() { return nameof(Continent); }
            }
        }
    }

    [JSType]
    public class IncompatibleOverloadTest1
    {
        public void Test()
        {
        }
    }

    [JSType]
    public class IncompatibleOverloadTest2 : IncompatibleOverloadTest1
    {
        public void Test(int a)
        {
        }
    }
}
