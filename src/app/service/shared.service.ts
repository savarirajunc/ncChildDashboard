import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SharedService {





   // Observable string sources
   private searchSubject = new Subject<string>();
   private missionAnnouncedSource = new Subject<string>();
   private missionConfirmedSource = new Subject<string>();
   private addmissionService = new Subject<string>();
   private updatemissionService = new Subject<string>();
   private updateDatamissionService = new Subject<string>();

   // Observable string streams
   missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   missionConfirmed$ = this.missionConfirmedSource.asObservable();
   addmissService$ = this.addmissionService.asObservable();
   updatemissionService$ = this.updatemissionService.asObservable();
   updateDatamissionService$ = this.updateDatamissionService.asObservable();
   searchSubject$ = this.searchSubject.asObservable();

   // Service message commands
   announceMission(mission: string) {
     this.missionAnnouncedSource.next(mission);
   }

   confirmMission(astronaut: string) {
     this.missionConfirmedSource.next(astronaut);
   }

   addmissService(addservice: string){
     this.addmissionService.next(addservice);
   }

   updatemissService(updateservice:string){
    this.updatemissionService.next(updateservice);
   }


   updateDatamissService(updateDataservice:string){
    this.updateDatamissionService.next(updateDataservice);
   }

   searchItem(searchKey:string){
    this.searchSubject.next(searchKey);
    console.log(searchKey);
  }



}
