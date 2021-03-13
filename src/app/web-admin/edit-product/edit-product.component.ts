import { WebAdminService } from './../web-admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadFileService } from '../../upload-file.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public  _response: any = { "status": false,"alert":"info", "message": "" };
  private product_id: any = [];
  public product: any = [];
  private formData: any = [];
  Url;
  selectedFiles: FileList;
  constructor( private activatedRoute: ActivatedRoute, private webAdminService: WebAdminService, private uploadFileService:UploadFileService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.product_id =  this.activatedRoute.snapshot.params.id;
    this.webAdminService.productGetById({ 'id' : this.product_id}).subscribe(response =>{
      console.log(response);
      this.product = response.data;
      this.Url = response.data[0].imageUpload;
    });
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadFileService.uploadfile(file);
    this.Url = localStorage.getItem('upload-img');
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onSubmit(form): void {
    this.formData = this.product[0];
    this.formData.imageUpload = this.Url;
    this.webAdminService.saveNcProduct(this.formData).subscribe( response => {
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
        //location.reload();
    });
  }

}
