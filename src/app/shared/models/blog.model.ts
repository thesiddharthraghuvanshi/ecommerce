export class Blog {
    title!: string;
    blogImageUrl!: string;
    dateTime?: string;
    time?: string;
    userName!: string;
    userImage?: string;
    blogText!: string;
  
    constructor(title: string, blogImageUrl: string, dateTime: string, userName: string, userImage: string, blogText: string) {
        this.title = title;
        this.blogImageUrl = blogImageUrl;
        this.dateTime = dateTime;
        this.userName = userName;
        this.userImage = userImage;
        this.blogText = blogText;
    }
  }