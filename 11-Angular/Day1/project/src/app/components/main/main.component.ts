import { Component } from '@angular/core';
import { Track } from 'src/app/Models/track';
import { TrackData } from 'src/app/Models/track-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  //property: type(className)
  track: Track = new Track('Mearn', './assets/course-01.jpg', [
    'Angular',
    'React',
  ]);

  //Interface
  trackInterface: TrackData = {
    trackName: 'Mearn',
    trackNamber: 20,
    courses: ['Node','Angular', 'React']
  };
}
