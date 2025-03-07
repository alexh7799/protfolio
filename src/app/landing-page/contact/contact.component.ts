import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { ArrowComponent } from "../../shared/arrow/arrow.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonsComponent, ArrowComponent, CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    policy: false
  };
  
  formErrors = {
    name: false,
    email: false,
    message: false,
    policy: false
  };

  validateForm() {
    // Reset errors
    this.formErrors = {
      name: false,
      email: false,
      message: false,
      policy: false
    };

    let hasError = false;

    if (!this.formData.name.trim()) {
      this.formErrors.name = true;
      hasError = true;
    }
    if (!this.formData.email.trim()) {
      this.formErrors.email = true;
      hasError = true;
    }
    if (!this.formData.message.trim()) {
      this.formErrors.message = true;
      hasError = true;
    }
    if (!this.formData.policy) {
      this.checkboxState.hasError = true;
      this.formErrors.policy = true;
      hasError = true;
  }

    if (!hasError) {
      // Hier kommt die Sende-Logik
      console.log('Form is valid', this.formData);
    }
  }

  checkboxState = {
    isChecked: false,
    isHovered: false,
    hasError: false
  };

  getCheckboxImage(): string {
    if (this.checkboxState.hasError) {
      return 'assets/img/checkbox-error.svg';
    }
    if (this.checkboxState.isChecked) {
      return 'assets/img/checkbox-checked.svg';
    }
    if (this.checkboxState.isHovered) {
      return 'assets/img/checkbox-hover.svg';
    }
    return 'assets/img/checkbox-default.svg';
  }

  toggleCheckbox() {
    this.checkboxState.isChecked = !this.checkboxState.isChecked;
    this.checkboxState.hasError = false;
    this.formData.policy = this.checkboxState.isChecked;
  }

  contactIcons = {
    email: {
      default: 'assets/img/email.svg',
      hover: 'assets/img/emailhover.svg',
      active: 'assets/img/emailactive.svg',
      isHovered: false,
      isActive: false
    },
    phone: {
      default: 'assets/img/phone_.svg',
      hover: 'assets/img/phone_hover.svg',
      active: 'assets/img/phone_active.svg',
      isHovered: false,
      isActive: false
    },
    policy: {
      isActive: false
    },
    legalnotice: {
      isActive: false
    }
  };

  getContactImage(type: 'email' | 'phone'): string {
    if (this.contactIcons[type].isActive) {
      return this.contactIcons[type].active;
    }
    if (this.contactIcons[type].isHovered) {
      return this.contactIcons[type].hover;
    }
    return this.contactIcons[type].default;
  }
}