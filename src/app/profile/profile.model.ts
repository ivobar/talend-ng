export class Profile {
    name: string;
    age: number;
    job: string;
    mainDescrip: string;
    secondaryDescrip: string;
    blogLink: string;
    roadmapLink: string;
    goals: string[];

    constructor(
        name: string,
        age: number,
        job: string,
        mainDescrip: string,
        secondaryDescrip: string,
        blogLink: string,
        roadmapLink: string,
        goals: string[]) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.mainDescrip = mainDescrip;
        this.secondaryDescrip = secondaryDescrip;
        this.blogLink = blogLink;
        this.roadmapLink = roadmapLink;
        this.goals = goals;
    }
}
