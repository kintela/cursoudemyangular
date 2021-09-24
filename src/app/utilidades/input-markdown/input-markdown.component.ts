import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  @Input()
  placeHolderTextArea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  contenidoMarkDown = '';

  ngOnInit(): void {
  }



}
