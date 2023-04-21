# STRAPI SCHEMAS

```ts
type Company = {
	name: string;
	logo: Media;
	isTopRecruiter: boolean;
	providesInternships: boolean;
	superDreamCompany: boolean;
	dreamCompany: boolean;
	normalCompany: boolean;
	coreCompany: boolean;
}
```

```ts
type Stats = {
	NumberOfStudentsPlaced: number;
	NumberOfCompaniesVisited: number;
	StudentsWith10plusLPA: number;
	NumberOfCompaniesThatComeToTCET: number;
	NumberOfStudentsGotInternships: number;
	NumberOfCompaniesVisitedForInternships: number;
}
```

```ts
type Achievement = {
	title: string;
	caption: string;
	image: Media;
	isStudentAchievement: boolean;
}
```

```ts
type Student = {
	name: string;
	year: string;
	profileImg: Media;
	branch: string;	
	ERP: string;
	companyPlaced: Type<Company>;
	package: string;
	superStarPerformer: boolean;
	startPerformer: boolean;
}
```

```ts
type Testimonial = {
	name: string;
	image: Media;
	testimonial: string;
	position: string;
	isStudent: boolean;
	event: null || Event;
}
```

```ts
type AllStarPerformersPDF = {
	year: number;
	file: File;
}
```

```ts
type IndustryInteraction = {
	company: Type<Company>;
	title: string;
	desciprtion: string;
	images: Array<Media>;
}
```

```ts
type Event = {
	title: string;
	purpose: string;
	heroImages: Array<Media>;
	objective: string;
	testimonials: Array<Testimonial>		
}
```

```ts
type Staff = {
	name: string;
  	designation: string;
  	image: ImageLink;
  	department: Enum<string>;	
}
```
