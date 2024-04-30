﻿using DCL.DebugUtilities;
using UnityEngine.Networking;

namespace DCL.WebRequests.Analytics.Metrics
{
    public class BandwidthDown : IRequestMetric
    {
        private ulong bandwidth { get; set; }

        public DebugLongMarkerDef.Unit GetUnit() => DebugLongMarkerDef.Unit.Bytes;

        public ulong GetMetric() =>
            bandwidth;

        public void OnRequestStarted(ITypedWebRequest request)
        {
        }

        public void OnRequestEnded(ITypedWebRequest request)
        {
            if (request.UnityWebRequest.result == UnityWebRequest.Result.Success)
            {
                bandwidth += (request.UnityWebRequest.downloadedBytes);
            }
        }
    }
}