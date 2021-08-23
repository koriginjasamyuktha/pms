export class PatientDetails {
    focus: focus;
    location : location;
    patient : patient;
    Pharmacist : Pharmacist;
    MedicationOrder : MedicationOrder;
}
export class focus {
    identifier: string;
}
export class location {
    system: string;
    NCPDP: number;
}
export class patient {
    id:string;
    name : Name;
    telecom: Array<telecom>;
    address: Address;
    birthdate: string;
}
export class telecom {
    system: string;
    use: string;
    value: string;
}
export class Name {
    given : Array<any>;
    family: string;
    prefix: string;
    suffix: string;
    text: string;
}
export class Address {
    line: Array<any>;
    city: string;
    state: string;
    postalCode: string;
}
export class Pharmacist {
    name : name;
}
export class name {
    given: Array<any>;
    family: string;
    prefix: string;
    suffix: string;
}
export class MedicationOrder {
    manifestId: string;
    totalSyncedRX :any;
    dateNeedBy: string;
    lines: Array<lines>;
}
export class lines{
    authorizingPrescription : authorizingPrescription;
    MedicationRequest : MedicationRequest;
    MedicationDispense : MedicationDispense;

}
export class MedicationRequest {
    authorOn: string;
    Requestor : Requestor;
    validityPeriod : validityPeriod;
    medicationCodeableConcept: Array<medicationCodeableConcept>;
}
export class Requestor {
    name : Name;
    address :Address;
    telecom: Array<telecom>;
}
export class validityPeriod {
    end: string;
}
export class medicationCodeableConcept {
    system: string;
    code: string;
}
export class MedicationDispense {
    dispenseLineId: string;
    originalFillDate: string;
    dispenseStartDate: string;
    dispenseRefillNumber: number;
    refillsRemaining: number;
    refillMessage: string;
    orderType: string;
    RXSyncSeq: number;

    medicationCodeableConcept: Array<medicationCodeableConcept>;
    substitution : substitution;
    daysSupply: number;
    quantity: number;

    sig: string;
    warning : Array<any>;
    dosageInstruction: Array<dosageInstruction>;
}

export class authorizingPrescription {
    value: string;
}
export class substitution {
    wasSubstituted: boolean;
}

export class dosageInstruction {
    asNeededBoolean: boolean;
    doseQuantity: doseQuantity;
    timing: Array<timing>;
}
export class additionalInstruction {
    text: string;
}
export class doseQuantity {
    unit: string;
    value: number;
}
export class timing{
    count: number;
    frequency: number;
    period: number;
    periodUnit: string;
    when: Array<any>;
    dayOfWeek: Array<any>;
}
