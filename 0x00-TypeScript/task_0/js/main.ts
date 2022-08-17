interface Student {
   firstName: string; 
    lastName: string;
    age: number;
    location: string; 
}
const student1: Student = {
    fisrtName: 'monkey',
    lastName: 'D.luffy',
    age: 19,
    location: 'rafitel'
} 
const student2: Student = {
    fisrtName: 'naruto',
    lastName: 'uzumaki',
    age: '21',
    location: 'konoha'
};
const studentsList: Array<Student> = [student1, student2];
