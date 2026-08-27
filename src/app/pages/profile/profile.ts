import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

type ProfileTab = 'about' | 'timeline' | 'friends' | 'photos';

@Component({
  selector: 'app-profile',
  imports: [LucideAngularModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  activeTab: ProfileTab = 'about';

  selectTab(tab: ProfileTab): void {
    this.activeTab = tab;
  }

}
