export interface Feed {
    id: string
    userData: UserData
    userCommentAt: string
    descriptionContent: string
    photoContent: string
    postComments: PostComments[]
    totalVote: number
}

export interface PostComments {
    id: string
    commentText: string
    userData: UserData
}

export interface UserData {
    userImage: string
    userName: string
}

