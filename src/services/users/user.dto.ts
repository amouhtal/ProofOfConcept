export class userDto {
    email: string;

    age: number;

    favoriteFoods: string[];

    picture: string;
}

export class addPictureDto{
    userId: string;
    pictureId: string
}