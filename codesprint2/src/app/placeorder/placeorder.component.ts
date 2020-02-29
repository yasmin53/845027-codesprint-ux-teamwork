import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GiftcardService } from 'src/services/giftcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  form:FormGroup  ;

  constructor(private formBuilder:FormBuilder,private giftcardService:GiftcardService,private router:Router) { }
  
  ngOnInit() {

    this.form=this.formBuilder.group({

      id: [],
      rupees: ['', Validators.required],
      paise: ['0', [Validators.required,Validators.min(0),Validators.max(100)]],
      street:['', Validators.required],
     state: ['', Validators.required],
     city:['', Validators.required],
     country:['India', Validators.required],
     pincode:['', [Validators.required,Validators.min(100000),Validators.max(999999)]],
     buyer_fname:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
     buyer_lname:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
     rec_fname:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
     rec_lname:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
     email:['', [Validators.required,Validators.email]],
     p1:['', Validators.required],
     p2:['', Validators.required],
     p3:['', Validators.required],
     p4:['', Validators.required],
     p5:['', Validators.required],
     p6:['', Validators.required],
     p7:['', Validators.required],
     p8:['', Validators.required],
     p9:['', Validators.required],
     p10:['', Validators.required],
    });
  }

  addCard(){
    this.giftcardService.saveCard(this.form.value).subscribe(data =>
      {
        this.router.navigate(['/giftcards'])
      });
  }

}
