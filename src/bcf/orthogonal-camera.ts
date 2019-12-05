export class OrthogonalCamera {
    /**
     * viewpoint of the camera
     */
    public camera_view_point: number[];

    /**
     * direction of the camera
     */
    public camera_direction: number[];

    /**
     * direction of camera up
     */
    public camera_up_vector: number[];

    /**
     * proportion of camera view to model
     */
    public view_to_world_scale: number;
}