import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ListboxModule } from "primeng/listbox";
import { MenuModule, MenuItemContent } from "primeng/menu";
import { MenuItem } from "primeng/api";
import { TabMenuModule } from "primeng/tabmenu";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextareaModule,
    ListboxModule,
    MenuModule,
    TabMenuModule
    // TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
