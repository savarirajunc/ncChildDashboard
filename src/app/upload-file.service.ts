import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

import { Injectable } from '@angular/core';

@Injectable()
export class UploadFileService {
  FOLDER = 'assets/kids/photo/';
  Doctor_Folder = 'assets/doctor/cv/';
  gameTaggingFolder = 'assets/gametagging/excel/';

  constructor() {}

  uploadfile(file) {
    const bucket = new S3({
      accessKeyId: 'AKIAIUPLRIH45BXRU5MA',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });

    const params = {
      Bucket: 'illustration.nidarachildren.com',
      Key: this.FOLDER + file.name,
      Body: file,
      ACL: 'public-read'
    };

    bucket.upload(params, function(err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      this.url = data.Location;
      localStorage.setItem('upload-img',data.Location)
      return true;
    });
  }
  uploadCVfile(file) {
    const bucket = new S3({
      accessKeyId: 'AKIAIUPLRIH45BXRU5MA',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });

    const params = {
      Bucket: 'illustration.nidarachildren.com',
      Key: this.Doctor_Folder + file.name,
      Body: file,
      ACL: 'public-read'
    };

    bucket.upload(params, function(err, data) {
      console.log(data)
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      this.url = data.Location;
      localStorage.setItem('upload-img',data.Location)
      return true;
    });
  }

  uploadExcalFile(file) {
    const bucket = new S3({
      accessKeyId: 'AKIAIUPLRIH45BXRU5MA',
      secretAccessKey: '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',
      region: 'ap-south-1'
    });

    const params = {
      Bucket: 'illustration.nidarachildren.com',
      Key: this.gameTaggingFolder + file.name,
      Body: file,
      ACL: 'public-read'
    };

    bucket.upload(params, function(err, data) {
      console.log(data)
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      this.url = data.Location;
      localStorage.setItem('upload-img', data.Location);
      return true;
    });
  }
}
