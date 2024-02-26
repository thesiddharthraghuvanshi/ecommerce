import { Component } from '@angular/core';
import { Blog } from '../../shared/models/blog.model';
import { BlogItemComponent } from "../../shared/components/blog-item/blog-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    imports: [CommonModule, BlogItemComponent]
})
export class BlogComponent {
  blogs: Blog[] = [{
    title: "Top prints on trend",
    blogImageUrl: '../../../../assets/images/blog1.jpeg',
    dateTime: "May 30, 2023",
    userName: "Admin",
    userImage: "",
    blogText: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."
  }, {
    title: "How to choose the right journal",
    blogImageUrl: '../../../../assets/images/blog2.jpeg',
    dateTime: "May 30, 2023",
    userName: "Admin",
    userImage: "",
    blogText: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."
  }, {
    title: "Back-to-school finest notebooks",
    blogImageUrl: '../../../../assets/images/blog3.jpeg',
    dateTime: "May 30, 2023",
    userName: "Admin",
    userImage: "",
    blogText: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."
  }, {
    title: "5 reasons why to write a note",
    blogImageUrl: '../../../../assets/images/blog4.jpeg',
    dateTime: "May 30, 2023",
    userName: "Admin",
    userImage: "",
    blogText: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."
  }, {
    title: "Gift wrapping methods",
    blogImageUrl: '../../../../assets/images/blog5.jpeg',
    dateTime: "May 30, 2023",
    userName: "Admin",
    userImage: "",
    blogText: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."
  }, {
    title: "A holiday gift guide",
    blogImageUrl: '../../../../assets/images/blog6.jpeg',
    dateTime: "May 30, 2023",
    userName: "Admin",
    userImage: "",
    blogText: "Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting."
  },];
}
