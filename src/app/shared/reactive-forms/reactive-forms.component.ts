import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  reactiveFormGroup!: FormGroup;

  constructor() {
    this.reactiveFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.reactiveFormGroup.get('userName'));
  }

  onChange(event: any) {
    console.log(event);
    // Resetting width and height to auto to get the new scroll dimensions
    event.target.style.height = 'auto';
    //  event.target.style.width = 'auto';

    event.target.style.height = event.target.scrollHeight + 'px';
    // event.target.style.width = event.target.scrollWidth + 1 + 'px';

    this.increaseWidth(event);
  }

  // Function to increase the textarea width
  increaseWidth(event: any) {
    let maxWidth = 500;
    let cursorPosition = event.target.selectionStart;
    let currentWidth = event.target.offsetWidth;
    let newWidth = currentWidth + 5; // Increase width by 5px

    // Check if the new width exceeds the max width
    if (newWidth < maxWidth) {
      event.target.style.width = newWidth + 'px';
    }

    // If the cursor is at the end of the text, keep increasing the width
    if (cursorPosition === event.target.value.length) {
      setTimeout(this.increaseWidth, 100); // Repeat after 100ms
    }
  }
}
