### School Catalogue
Created a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

Created classes for primary and high schools. 

##### School
<ul>
    <li>Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)</li>
    <li>Getters: all properties have getters</li>
    <li>Setters: the numberOfStudents property has a setter</li>
    <li>Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)</li>
</ul>


##### Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)

##### Middle
Does not include any additional properties or methods

##### High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)