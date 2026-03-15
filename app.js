pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "PXL_20260315_040404775.PHOTOSPHERE.jpg", 
    "autoLoad": true,
    "autoRotate": -2, // Slowly rotates the room for a museum feel
    "title": "SCL Museum Interior",
    "author": "Captured on Google Pixel 6",
    "hotSpots": [
        {
            "pitch": -10,
            "yaw": 20,
            "type": "info",
            "text": "View Mercedes Benz 3D Model",
            "URL": "view.html" // Link back to your benz.glb page!
        }
    ]
});