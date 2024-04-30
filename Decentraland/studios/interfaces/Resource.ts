export interface PartnerProjectResponse {
  data: Resource[]
}

export interface Resource {
    title:       string;
    tags:        string[] | null;
    github_link: string;
    description: string;
    video_1:     string | null;
    image_1:     string | null;
    play_link:   string;
    id:          number;
    scene_type?:  string;
    difficulty_level?: string;
    sdk_version?: string;
}
