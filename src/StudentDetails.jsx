/**
 * Author: Calucin, Reign Alexander
 * Date: March 2026
 */
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();

  const students = [
    {
      id: 1,
      name: 'Calucin, Reign Alexander S.',
      age: 18,
      major: 'Computer Science',
      year: '1st Year',
      gpa: 3.8,
      email: 'calucin.reign@university.edu',
      bio: 'Eager first-year computer science student excited to begin my programming journey. Passionate about technology and eager to learn the fundamentals of software development.',
      skills: ['Basic Programming', 'Problem Solving', 'Java Basics', 'HTML/CSS Basics', 'Microsoft Office'],
      hobbies: ['Gaming', 'Reading', 'Eating'],
      achievements: [
        'High School Journalism 1st Place Winner',
        'Once had a perfect score in exams',
        'Sleep Competition Champion'
      ],
      courses: [
        { name: 'APTECH1', grade: 'A' },
        { name: 'DBMWEB1', grade: 'A-' },
        { name: 'NETCOM1', grade: 'B+' },
        { name: 'PROGIT1', grade: 'A' },
        { name: 'NSTP2', grade: 'B+' },
        { name: 'PATHFT2', grade: 'A-' },
        { name: 'ARTAPP1', grade: 'B+' }
      ]
    },
    {
      id: 2,
      name: 'Padilla, John Mark U.',
      age: 18,
      major: 'Information Technology',
      year: '1st Year',
      gpa: 3.6,
      email: 'padilla.johnmark@university.edu',
      bio: 'First-year IT student with growing interest in network administration and cybersecurity. Eager to learn the fundamentals of technology systems.',
      skills: ['Basic Computer Skills', 'Problem Solving', 'Microsoft Office', 'Basic Networking'],
      hobbies: ['Gaming', 'Basketball', 'Tech News'],
      achievements: [
        'High School Technology Award',
        'Computer Assembly Competition Participant',
        'Student Council Member'
      ],
      courses: [
        { name: 'APTECH1', grade: 'B+' },
        { name: 'DBMWEB1', grade: 'A-' },
        { name: 'NETCOM1', grade: 'A' },
        { name: 'PROGIT1', grade: 'B+' },
        { name: 'NSTP2', grade: 'A' },
        { name: 'PATHFT2', grade: 'B+' },
        { name: 'ARTAPP1', grade: 'A-' }
      ]
    },
    {
      id: 3,
      name: 'Jallores, Khen Lister G.',
      age: 19,
      major: 'Computer Science',
      year: '2nd Year',
      gpa: 3.9,
      email: 'jallores.khen@university.edu',
      bio: 'Second-year computer science student with a passion for algorithm design and competitive programming. Building a strong foundation in software development.',
      skills: ['Python', 'Java', 'Data Structures', 'Basic Algorithms', 'C++'],
      hobbies: ['Chess', 'Music Production', 'Coding Challenges'],
      achievements: [
        'Outstanding Academic Performance',
        'Programming Competition Participant',
        'Deans List - 1 semester'
      ],
      courses: [
        { name: 'APTECH1', grade: 'A' },
        { name: 'DBMWEB1', grade: 'A' },
        { name: 'NETCOM1', grade: 'A-' },
        { name: 'PROGIT1', grade: 'A' },
        { name: 'NSTP2', grade: 'B+' },
        { name: 'PATHFT2', grade: 'A' },
        { name: 'ARTAPP1', grade: 'A-' }
      ]
    },
    {
      id: 4,
      name: 'Libiran, Cyrill Aljaylen',
      age: 18,
      major: 'Information Technology',
      year: '1st Year',
      gpa: 3.7,
      email: 'libiran.cyrill@university.edu',
      bio: 'Freshman IT student excited to explore web development and user interface design. Passionate about creating digital experiences that help people.',
      skills: ['HTML', 'CSS', 'Basic JavaScript', 'UI/UX Basics', 'Graphic Design'],
      hobbies: ['Digital Art', 'Video Games', 'Photography'],
      achievements: [
        'Web Design Workshop Participant',
        'School Art Competition Winner',
        'Community Service Award'
      ],
      courses: [
        { name: 'APTECH1', grade: 'A-' },
        { name: 'DBMWEB1', grade: 'A' },
        { name: 'NETCOM1', grade: 'B+' },
        { name: 'PROGIT1', grade: 'A-' },
        { name: 'NSTP2', grade: 'A' },
        { name: 'PATHFT2', grade: 'B+' },
        { name: 'ARTAPP1', grade: 'A' }
      ]
    },
    {
      id: 5,
      name: 'Ngo, Jules Riane S.',
      age: 19,
      major: 'Computer Science',
      year: '2nd Year',
      gpa: 3.8,
      email: 'ngo.jules@university.edu',
      bio: 'Second-year computer science student with strong analytical skills and interest in data science. Combining mathematics and programming to solve real-world problems.',
      skills: ['Data Analysis', 'Statistics', 'Java', 'SQL', 'Machine Learning Basics'],
      hobbies: ['Reading', 'Cooking', 'Data Visualization'],
      achievements: [
        'Mathematics Excellence Award',
        'Data Science Workshop Participant',
        'Academic Scholarship Recipient'
      ],
      courses: [
        { name: 'APTECH1', grade: 'A' },
        { name: 'DBMWEB1', grade: 'A-' },
        { name: 'NETCOM1', grade: 'A' },
        { name: 'PROGIT1', grade: 'A' },
        { name: 'NSTP2', grade: 'B+' },
        { name: 'PATHFT2', grade: 'A-' },
        { name: 'ARTAPP1', grade: 'A' }
      ]
    },
    {
      id: 6,
      name: 'Santos, Maria Elena R.',
      age: 18,
      major: 'Computer Science',
      year: '1st Year',
      gpa: 3.5,
      email: 'santos.maria@university.edu',
      bio: 'Eager first-year student excited to begin my journey in computer science. Passionate about technology and eager to learn programming fundamentals.',
      skills: ['Basic Programming', 'Problem Solving', 'Microsoft Office', 'HTML'],
      hobbies: ['Reading', 'Dancing', 'Social Media'],
      achievements: [
        'High School Valedictorian',
        'Science Fair Winner',
        'Student Council Secretary'
      ],
      courses: [
        { name: 'APTECH1', grade: 'B+' },
        { name: 'DBMWEB1', grade: 'A-' },
        { name: 'NETCOM1', grade: 'B' },
        { name: 'PROGIT1', grade: 'B+' },
        { name: 'NSTP2', grade: 'A' },
        { name: 'PATHFT2', grade: 'A-' },
        { name: 'ARTAPP1', grade: 'B+' }
      ]
    },
    {
      id: 7,
      name: 'Garcia, Antonio Miguel L.',
      age: 19,
      major: 'Information Technology',
      year: '2nd Year',
      gpa: 3.4,
      email: 'garcia.antonio@university.edu',
      bio: 'Second-year IT student with growing interest in network administration and cybersecurity. Enjoy hands-on technical work and troubleshooting.',
      skills: ['Basic Networking', 'Hardware Troubleshooting', 'Windows Administration', 'Basic Linux'],
      hobbies: ['Gaming', 'Basketball', 'DIY Electronics'],
      achievements: [
        'IT Club Member',
        'Computer Assembly Competition Participant',
        'Deans List - 1 semester'
      ],
      courses: [
        { name: 'APTECH1', grade: 'B' },
        { name: 'DBMWEB1', grade: 'B+' },
        { name: 'NETCOM1', grade: 'A-' },
        { name: 'PROGIT1', grade: 'B+' },
        { name: 'NSTP2', grade: 'A-' },
        { name: 'PATHFT2', grade: 'B+' },
        { name: 'ARTAPP1', grade: 'B' }
      ]
    },
    {
      id: 8,
      name: 'Reyes, Sofia Isabella C.',
      age: 18,
      major: 'Computer Science',
      year: '1st Year',
      gpa: 3.7,
      email: 'reyes.sofia@university.edu',
      bio: 'Freshman computer science student with a strong mathematical background. Excited to explore programming and algorithm design.',
      skills: ['Mathematics', 'Logic', 'Basic Algorithms', 'Python Basics'],
      hobbies: ['Piano', 'Chess', 'Anime', 'Writing'],
      achievements: [
        'Mathematics Olympiad Participant',
        'School Choir Member',
        'Perfect Attendance Award'
      ],
      courses: [
        { name: 'APTECH1', grade: 'A-' },
        { name: 'DBMWEB1', grade: 'A' },
        { name: 'NETCOM1', grade: 'B+' },
        { name: 'PROGIT1', grade: 'A' },
        { name: 'NSTP2', grade: 'A' },
        { name: 'PATHFT2', grade: 'A-' },
        { name: 'ARTAPP1', grade: 'A' }
      ]
    },
    {
      id: 9,
      name: 'Torres, Carlos Eduardo M.',
      age: 19,
      major: 'Information Technology',
      year: '2nd Year',
      gpa: 3.3,
      email: 'torres.carlos@university.edu',
      bio: 'Second-year IT student focusing on software development and database management. Enjoy creating practical applications and solving real-world problems.',
      skills: ['JavaScript', 'Database Design', 'Web Development', 'SQL'],
      hobbies: ['Photography', 'Video Editing', 'Cooking'],
      achievements: [
        'Web Development Workshop Participant',
        'Photography Club Member',
        'Community Service Volunteer'
      ],
      courses: [
        { name: 'APTECH1', grade: 'B+' },
        { name: 'DBMWEB1', grade: 'A-' },
        { name: 'NETCOM1', grade: 'B+' },
        { name: 'PROGIT1', grade: 'B' },
        { name: 'NSTP2', grade: 'A-' },
        { name: 'PATHFT2', grade: 'B+' },
        { name: 'ARTAPP1', grade: 'B' }
      ]
    },
    {
      id: 10,
      name: 'Dela Cruz, Juan Carlos P.',
      age: 19,
      major: 'Computer Science',
      year: '2nd Year',
      gpa: 3.5,
      email: 'delacruz.juancarlos@university.edu',
      bio: 'Second-year computer science student passionate about artificial intelligence and machine learning. Enjoys building innovative solutions and exploring cutting-edge technologies.',
      skills: ['Python', 'Machine Learning', 'Data Structures', 'Algorithms', 'Java'],
      hobbies: ['Coding Challenges', 'Reading Tech Blogs', 'Basketball', 'Music Production'],
      achievements: [
        'Programming Competition Finalist',
        'AI Workshop Participant',
        'Deans List (Semester 1)',
        'Open Source Contributor'
      ],
      courses: [
        { name: 'APTECH1', grade: 'A-' },
        { name: 'DBMWEB1', grade: 'B+' },
        { name: 'NETCOM1', grade: 'A' },
        { name: 'PROGIT1', grade: 'A-' },
        { name: 'NSTP2', grade: 'B+' },
        { name: 'PATHFT2', grade: 'A' },
        { name: 'ARTAPP1', grade: 'B+' }
      ]
    }
  ];

  const student = students.find(s => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="container">
        <div className="card">
          <h1>Student Not Found</h1>
          <p>The requested student could not be found.</p>
          <Link to="/students" className="btn">Back to Students</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="profile-banner"></div>
      <div className="card profile-header">
        <div className="avatar">
          <span className="avatar-letter">{student.name.charAt(0)}</span>
        </div>
        <div className="profile-info">
          <h1>{student.name}</h1>
          <p className="headline">{student.major} • {student.year}</p>
          <p className="subheadline">GPA: {student.gpa}</p>
        </div>
      </div>
      <div className="profile-content">
        <div className="card">
          <h3>📧 Contact Information</h3>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Age:</strong> {student.age} years old</p>
        </div>

        <div className="card">
          <h3>👤 About Me</h3>
          <p>{student.bio}</p>
        </div>

        <div className="card">
          <h3>🛠️ Skills</h3>
          <div className="skills-list">
            {student.skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>🎯 Hobbies</h3>
          <ul>
            {student.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>🏆 Achievements</h3>
          <ul>
            {student.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>📖 Current Courses</h3>
          <div className="courses-grid">
            {student.courses.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.name}</h4>
                <p>{course.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/students" className="btn">Back to All Students</Link>
      </div>
    </div>
  );
};

export default StudentDetails;