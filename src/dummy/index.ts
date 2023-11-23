import { Feed, PostComments } from "../interface";

export const dummyFeed: Feed[] = [{
    id: 'post-1',
    descriptionContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
    photoContent: 'https://picsum.photos/200',
    userData: {
        userImage: 'https://picsum.photos/200',
        userName: 'Usup Suparma'
    },
    postComments: [
        {
            id: 'comment-1',
            commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
            userData: {
                userImage: 'https://picsum.photos/200',
                userName: 'Sudin Sudirma'
            }
        },
        {
            id: 'comment-2',
            commentText: 'Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit.',
            userData: {
                userImage: 'https://picsum.photos/200',
                userName: 'Sudirman Wanjoro'
            }
        }
    ],
    totalVote: 3,
    userCommentAt: 'Mar 27, 2023'
},
{
    id: 'post-2',
    descriptionContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
    photoContent: 'https://picsum.photos/200',
    userData: {
        userImage: 'https://picsum.photos/200',
        userName: 'Ujang Sijajang'
    },
    postComments: [
        {
            id: 'comment-1',
            commentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
            userData: {
                userImage: 'https://picsum.photos/200',
                userName: 'Titin Marini'
            }
        },
        {
            id: 'comment-2',
            commentText: 'Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit.',
            userData: {
                userImage: 'https://picsum.photos/200',
                userName: 'Budiman'
            }
        },
        {
            id: 'comment-3',
            commentText: 'Nulla luctus in ipsum ac dictum.',
            userData: {
                userImage: 'https://picsum.photos/200',
                userName: 'Agusman'
            }
        }
    ],
    totalVote: 6,
    userCommentAt: 'Mar 28, 2023'
}]