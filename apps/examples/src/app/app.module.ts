import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent } from './examplecomp/examplecomp.component';
import { ParentComponentComponent } from './directive-examples/parent-component/parent-component.component';
import { ChildComponentComponent } from './directive-examples/child-component/child-component.component';
import { RainbowDirective } from './directive-examples/rainbow.directive';

@NgModule({
  declarations: [AppComponent, ExampleComponent, ParentComponentComponent, ChildComponentComponent, RainbowDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
