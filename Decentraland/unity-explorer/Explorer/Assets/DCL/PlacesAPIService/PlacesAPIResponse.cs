using DCL.Lambdas;
using DCL.Optimization.Pools;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using UnityEngine;
using UnityEngine.Pool;

namespace DCL.PlacesAPIService
{
    public static class PlacesData
    {
        public static readonly ObjectPool<PlaceInfo> PLACE_INFO_POOL = new (() => new PlaceInfo(), defaultCapacity: 10, maxSize: 1000);
        internal static readonly ListObjectPool<PlaceInfo> PLACE_INFO_LIST_POOL = new (listInstanceDefaultCapacity: 100, defaultCapacity: 4);

        // Preallocate the list so it will be reused every time it's parsed into
        internal static readonly ObjectPool<PlacesAPIResponse> PLACES_API_RESPONSE_POOL = new (() => new PlacesAPIResponse { data = new List<PlaceInfo>(200) }, actionOnRelease: p => p.data.Clear(), defaultCapacity: 4);

        internal static readonly ObjectPool<ReportPlaceAPIResponse> REPORT_PLACE_API_RESPONSE_POOL = new (() => new ReportPlaceAPIResponse(), defaultCapacity: 4);

        [Serializable]
        public class PlaceInfo : ISerializationCallbackReceiver
        {
            public string id;
            public string title;
            public string description;
            public string image;
            public string owner;
            public string[] tags;
            public string world_name;

            public Vector2Int[] Positions;

            public string base_position;
            public string contact_name;
            public string contact_email;
            public string content_rating;
            public bool disabled;
            public string disabled_at;
            public string created_at;
            public string updated_at;
            public string deployed_at;
            public int favorites;
            public int likes;
            public int dislikes;
            public string[] categories;
            public bool highlighted;
            public string highlighted_image;
            public bool featured;
            public string featured_image;
            public bool user_favorite;
            public bool user_like;
            public bool user_dislike;
            public int user_count;
            public int user_visits;
            public Realm[] realms_detail;

            public string like_rate;
            [SerializeField] private string[] positions;

            [JsonIgnore]
            public float? like_rate_as_float
            {
                get
                {
                    if (string.IsNullOrEmpty(like_rate))
                        return null;

                    if (float.TryParse(like_rate, NumberStyles.Float, CultureInfo.InvariantCulture, out float result))
                        return result;

                    return null;
                }
            }

            public void OnBeforeSerialize()
            {
                if (Positions == null)
                {
                    positions = null;
                    return;
                }

                positions = new string[Positions.Length];

                for (var i = 0; i < Positions.Length; i++)
                    positions[i] = $"{Positions[i].x},{Positions[i].y}";
            }

            public void OnAfterDeserialize()
            {
                if (positions == null)
                    return;

                Positions = new Vector2Int[positions.Length];

                for (var i = 0; i < positions.Length; i++)
                {
                    string[] split = positions[i].Split(',');
                    Positions[i] = new Vector2Int(int.Parse(split[0]), int.Parse(split[1]));
                }
            }

            [Serializable]
            public class Realm
            {
                public string serverName;
                public string layer;
                public string url;
                public int usersCount;
                public int maxUsers;
                public Vector2Int[] userParcels;
            }
        }

        // TODO: This class should be moved to the PlacesAPIService folder
        [Serializable]
        public class PlacesAPIResponse : PaginatedResponse, IPlacesAPIResponse
        {
            public bool ok;
            public int total;
            public List<PlaceInfo> data;

            int IPlacesAPIResponse.Total => total;
            IReadOnlyList<PlaceInfo> IPlacesAPIResponse.Data => data;

            public void Dispose()
            {
                PLACES_API_RESPONSE_POOL.Release(this);
            }
        }

        /// <summary>
        ///     To keep things non-mutable
        /// </summary>
        public interface IPlacesAPIResponse : IDisposable
        {
            int Total { get; }

            IReadOnlyList<PlaceInfo> Data { get; }
        }

        // TODO: This class should be moved to the PlacesAPIService folder
        [Serializable]
        public class PlacesAPIGetParcelResponse
        {
            public bool ok;
            public PlaceInfo data;
        }
    }
}