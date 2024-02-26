import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { DatePipe } from '@angular/common';
import { CustomPipesModule } from '../../pipes/custom-pipes.module';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [DatePipe, CustomPipesModule],
  providers: [DatePipe],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent implements OnInit {

  @Input() blog: Blog = {
    title: "",
    blogImageUrl: '',
    dateTime: "",
    userName: "",
    userImage: "",
    blogText: ""
  };

  timeNow = new Date();

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
}
