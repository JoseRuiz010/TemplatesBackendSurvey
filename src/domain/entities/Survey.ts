import { User } from "./user";

export class Survey {
  private id: string | number;
  private name:string;
  private description:string;
  private type:string| null;
  private sub_type:string| null;
  private status:string| null;
  private visible:boolean| null;
  private enabled:boolean;
  private user:User | null;

  constructor(
    _id: string | number ,
    _name:string,
    _description:string,
    _type:string| null,
    _sub_type:string | null,
    _status:string | null,
    _visible:boolean| null=true,
    _enabled:boolean =true,
    _user:User|null = null
  ) {
    this.id=_id
    this.name=_name
    this.description=_description
    this.type=_type
    this.sub_type=_sub_type
    this.status=_status
    this.visible=_visible
    this.enabled=_enabled
    this.user=_user
  }

get getId(){
  return this.id
}
get getName(){
  return this.name
}  
get getDescription(){
  return this.description
}
get getType(){
  return this.type
}
get getSubType(){
  return this.sub_type
}  
get getStatus(){
  return this.status
}
get getVisible(){
  return this.visible
}
get getEnabled(){
  return this.enabled
} 
get getUser(){
  return this.user
} 



}