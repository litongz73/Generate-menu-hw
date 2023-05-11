import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListGeneratorComponent } from './list-generator/list-generator.component';
@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, ListGeneratorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
