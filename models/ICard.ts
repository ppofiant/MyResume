import { ProjectType } from "public/enums";

export interface ICard {
    projectType: ProjectType;
    imageUrl: string;
    isCompleted: boolean;
    projectName: string;
    projectDesc: string;
    demoUrl?: string;
    codeUrl?: string;
}