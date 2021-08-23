import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import 'moment-timezone';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

import { DateFormat } from 'src/app/core/constants/app.constant';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-pms',
  templateUrl: './pms.component.html',
  styleUrls: ['./pms.component.scss']
})
export class PmsComponent implements OnInit {
  /*********************Properties*********************/
  panelOpenState = true;

  pmsForm: FormGroup;
  /*********************Properties*********************/

  /*********************Constructor*********************/
  constructor( private formBuilder: FormBuilder,) { }
  /*********************Constructor*********************/

  /*********************Lifecyle Methods*********************/
  ngOnInit(): void {

        //Form Initialization
        this.pmsForm = this.formBuilder.group({
          'identifier':['af7816a4-3b87-41c4-91d5-f4f7a0369099'],
          'system':['BestRx'],
          'ncpdp':['4583337'],
          'patient_id':['ID00001'],
          'patient_prefix':[''],
          'patient_suffix':[''],
          'patient_firstname':['Jane'],
          'patient_middlename':[''],
          'patient_lastname':['Jackson'],
          
          'patient_system':['phone'],
          'patient_use':['home'],
          'patient_phone':['(313)123-1235'],
          'patient_address':['123 Main Street'],
          'patient_address2':['Apt E'],
          'patient_city':['Delaware'],
          'patient_state':['DE'],
          'patient_zip':['96079'],

          'dob' : [],
          'dnb' : [],
          'authorOn' : [],
          'validityperiod' : [],
          'ofd' : [],
          'dsd' : [],

          'pharmacist_prefix': [ 'Pharm. D.'],
          'pharmacist_suffix': [ 'Dr.'],
          'pharmacist_first_name': [ 'Robin'],
          'pharmacist_middle_name': [ ''],
          'pharmacist_last_name': [ 'Brown'],
          
          'medication_dispense_manifestId': ['9901'],
          'medication_dispense_totalSyncedRX': [1],
          'medication_dispense_dateNeedBy': [],
          
          'authorizingPrescription': [ '202105241557'],
          'requestor_prefix': ['Dr.'],
          'requestor_suffix': [''],
          'requestor_first_name': ['Mary'],
          'requestor_middle_name': [''],
          'requestor_last_name': ['Malone'],
          'requestor_line_1': ['15 Central Ave Suite B'],
          'requestor_line_2': [''],
          'requestor_city': ['Newark'],
          'requestor_state': ['DE'],
          'requestor_postalCode': ['19713'],
          'requestor_home_system': ['phone'],
          'requestor_home_use': ['work'],
          'requestor_home_number': ['(313)309-4225'],
          'medicationCodeableConcept_system': ['http://hl7.org/fhir/sid/ndc'],
          'medicationCodeableConcept_code': ['67877-0321-05'],
          
          'mDispanse_daysSupply': [ '30'],
          'mDispanse_quantity': [ '90'],
          'mDispanse_sig': [ 'TAKE 1 PILL IN THE MORNING, 2 PILLS AT NIGHT'],
          'mDispanse_wasSubstituted': [ 'false'],
          'mDispanse_dispenseLineid': [ 'ABC999'],
          'mDispanse_originalFillDate': [ '2020-08-01T12:23:00Z'],
          'mDispanse_dispenseStartDate': [ '2020-08-01T12:23:00Z'],
          'mDispanse_dispenseRefillNumber': [ '4'],
          'mDispanse_refillsRemaining': [ '3'],
          'mDispanse_refillMessage': [ ''],
          'mDispanse_orderType': [ 'ATP'],
          'mDispanse_RXSyncSeq': [ '1'],
          'mDispanse_concept_system': [ 'http://hl7.org/fhir/sid/ndc'],
          'mDispanse_concept_code': [ '67877-0321-05'],
          
          'warning': [ ''],
          
          'dosage_instructions_asNeededBoolean': [ 'false'],
          'dosage_instructions_dose_quantity_value': [ '1'],
          'dosage_instructions_dose_quantity_unit': [ 'TAB'],
          
          'timing_frequency': [ '1'],
          'timing_period': [ '1'],
          'timing_periodUnit': [ 'd'],
          'timing_count': [ '30'],
        });
  }
  /*********************Lifecyle Methods*********************/

  /*********************Helper Methods*********************/

  /*********************Helper Methods*********************/

  /*********************Component Methods*********************/

  /*********************Component Methods*********************/

  /*********************Dialog Methods*********************/

  /*********************Dialog Methods*********************/

  /*********************Init/Reset Methods*********************/

  /*********************Init/Reset Methods*********************/
}
