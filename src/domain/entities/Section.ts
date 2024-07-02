class Section {
  constructor(
    public id: string,
    public title: string,
    public quizId: string,
    public parentId?: string,  // Optional parent section ID for nested sections   
  ) {}
}