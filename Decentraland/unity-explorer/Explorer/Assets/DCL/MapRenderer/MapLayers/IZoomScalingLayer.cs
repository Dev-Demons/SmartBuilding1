﻿namespace DCL.MapRenderer.MapLayers
{
    public interface IZoomScalingLayer
    {
        void ApplyCameraZoom(float baseZoom, float newZoom);

        void ResetToBaseScale();
    }
}
