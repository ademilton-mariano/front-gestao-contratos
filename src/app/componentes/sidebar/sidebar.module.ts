import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule(
    {
        declarations: [SidebarComponent],
        imports: [CommonModule,
            FormsModule],
        exports: [SidebarComponent]
    }
)

export class SidebarModule { }
