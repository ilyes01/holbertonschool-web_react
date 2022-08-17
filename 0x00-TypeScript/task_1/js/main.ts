interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


interface Directors extends Teacher {
numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): void;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): void;
}
