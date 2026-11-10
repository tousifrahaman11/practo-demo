export type Category = "Vet Clinic"|"Hospital"|"Boarding"|"Diagnostics"|"Ambulance"|"NGO";
export interface Provider { id:number; name:string; category:Category; area:string; rating:number; reviews:number; hours:string; km:number; openNow:boolean; emergency:boolean; services:string[]; about:string }
export const categories: Category[] = ["Vet Clinic","Hospital","Boarding","Diagnostics","Ambulance","NGO"];
// All providers are fictional demo data.
export const providers: Provider[] = [
 {id:1,name:"GreenLeaf Pet Clinic",category:"Vet Clinic",area:"Salt Lake, Kolkata",rating:4.8,reviews:214,hours:"9am–8pm",km:1.2,openNow:true,emergency:false,services:["Vaccination","Dental","Grooming"],about:"Neighbourhood clinic for dogs and cats."},
 {id:2,name:"Paws & Care Hospital",category:"Hospital",area:"Park Street, Kolkata",rating:4.6,reviews:389,hours:"Open 24 hours",km:3.4,openNow:true,emergency:true,services:["Surgery","ICU","X-ray"],about:"24-hour multi-specialty animal hospital."},
 {id:3,name:"Happy Tails Boarding",category:"Boarding",area:"New Town, Kolkata",rating:4.5,reviews:98,hours:"8am–7pm",km:5.1,openNow:false,emergency:false,services:["Day care","Overnight stay","Walks"],about:"Cage-free boarding with daily updates."},
 {id:4,name:"VetScan Diagnostics",category:"Diagnostics",area:"Ballygunge, Kolkata",rating:4.3,reviews:76,hours:"8am–6pm",km:4.0,openNow:true,emergency:false,services:["Blood tests","Ultrasound","Pathology"],about:"Lab and imaging centre for pets."},
 {id:5,name:"RescueRide Animal Ambulance",category:"Ambulance",area:"Howrah, Kolkata",rating:4.4,reviews:61,hours:"Open 24 hours",km:6.8,openNow:true,emergency:true,services:["Pickup","Oxygen support","Inter-clinic transfer"],about:"Demo ambulance listing with 24-hour pickup."},
 {id:6,name:"Streetpaws Foundation",category:"NGO",area:"Behala, Kolkata",rating:4.9,reviews:142,hours:"10am–5pm",km:8.2,openNow:false,emergency:false,services:["Adoption","Rescue","Sterilisation drives"],about:"Volunteer-run NGO supporting street animals."},
 {id:7,name:"Whiskers Cat Clinic",category:"Vet Clinic",area:"Jadavpur, Kolkata",rating:4.7,reviews:120,hours:"10am–7pm",km:2.6,openNow:true,emergency:false,services:["Feline care","Vaccination","Neutering"],about:"Cat-friendly clinic with a quiet waiting room."},
 {id:8,name:"CityVet Emergency Centre",category:"Hospital",area:"Salt Lake, Kolkata",rating:4.2,reviews:203,hours:"Open 24 hours",km:1.9,openNow:true,emergency:true,services:["Emergency","Surgery","Pharmacy"],about:"Round-the-clock emergency unit."}];
