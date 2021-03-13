
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../upload-file.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Video } from 'aws-sdk/clients/rekognition';
import { WebAdminService } from '../web-admin.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  public editorValue:string = '';
  selectedFiles: FileList;
  Url;
  productForm: FormGroup;
  formData:any = [];
  constructor( private uploadFileService: UploadFileService, private formBuilder: FormBuilder, private webAdminService: WebAdminService ) {
    this.initForm();
   }

  ngOnInit() { window.scrollTo(0, 0);
  }

  private initForm(): void {
    this.productForm = this.formBuilder.group({
      productName : '',
      productDescription : '',
      genderType: '',
      imageUpload: '',
      productPriceingQty : this.formBuilder.array([
        this.formBuilder.group({
          productPrice : '',
          productAgeStage : ''
        })
      ])
    });
  }

  getProductForm (): FormArray {
    return this.productForm.get('productPriceingQty') as FormArray;
  }
  addFiled (): void {
    this.getProductForm().push(
      this.formBuilder.group({
        productPrice : '',
        productAgeStage : ''
      })
    );
  }

  onSubmit(form): void {
    this.formData = this.productForm.getRawValue();
    this.formData.imageUpload = this.Url;
    this.webAdminService.saveNcProduct(this.formData).subscribe( response =>{
      console.log(response);
      if(response.status){
        //form.reset();
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-success";
        }
        else{
          this._response['status'] = true;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
        }
        location.reload();
    })
  }
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadFileService.uploadfile(file);
    this.Url = localStorage.getItem('upload-img');
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}
