import React from 'react';
import './styles.css';


const Resume = () => {
  return (
    <div style={{ backgroundColor: 'gainsboro' }}>
      <table style={{ width: '724px', height: '1024px' }}>
        <tbody>
          <tr> {/* Row 1 */}
            <td colSpan="4" rowSpan="8" align="center" style={{ maxWidth: '100%', maxHeight: '100%', padding: 0 }}>
              <img src="https://i.imgur.com/NtanIrT.jpeg" style={{ width: '100%', height: '100%', display: 'block', margin: 'auto' }} alt="Avatar" />
            </td>
          </tr>
          <tr> {/* Row 2 */}
            <td colSpan="4">&nbsp;</td>
          </tr>
          <tr style={{ fontSize: '40px' }}> {/* Row 3 */}
            <th colSpan="4" rowSpan="2">SANGIL, HAZEL JOYCE Y.</th>
          </tr>
          <tr></tr>
          <tr>
            <th colSpan="4" style={{ fontSize: '15px'}}>COLLEGE GRADUATE</th>
          </tr>
          <tr>
            <th colSpan="4" style={{ fontSize: '20px', color: 'crimson'}}>MAIN OBJECTIVE</th>
          </tr>
          <tr> {/* Row 8 */}
            <td colSpan="4" rowSpan="5" style={{ fontSize: '15px' }}>
              An experienced computer engineer with a focus on data science, seeking opportunities to apply advanced analytics and machine learning techniques for insightful data-driven decision-making.
              <br />
              A motivated computer engineer with a focus on quantum computing, seeking opportunities to contribute to the evolving field of quantum information processing and advance the capabilities of quantum computers.
            </td>
          </tr>
          <tr> {/* Row 9 */}
             <th colSpan="4" rowSpan="2" style={{ fontSize: '20px', backgroundColor: 'crimson', color: 'white' }}>CONTACT</th>
          </tr>
          <tr> {/* Row 10 */}</tr>
          <tr> {/* Row 11 */}
            <td colSpan="4" style={{ backgroundColor: 'crimson', color: 'white', fontSize: '15px' }}>+639123700693</td>
          </tr>
          <tr> 
            <td colSpan="4" style={{ backgroundColor: 'crimson', color: 'white', fontSize: '15px' }}>Website</td>
          </tr>
          <tr> 
            <td colSpan="4" style={{ backgroundColor: 'crimson', color: 'white', fontSize: '15px' }}>hazeljoycesangil21@gmail.com</td>
            <th colSpan="4" style={{ fontSize: '20px', color: 'crimson' }}>WORK EXPERIENCE</th>
          </tr>
          <tr> {/* Row 15 */}
            <th colSpan="4" style={{ fontSize: '20px', backgroundColor: 'crimson', color: 'white' }}>INTEREST</th>
            <th colSpan="4" style={{ fontSize: '15px' }}>Network Nexus Inc. | (2019-2021)</th>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Cooking</td>
            <td colspan="4" style={{ fontSize: '15px' }}>- Administered and optimized large-scale networks, ensuring seamless connectivity and troubleshooting network-related issues.</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Cleaning</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Shopping</td>
            <td colspan="4" style={{ fontSize: '15px'}}>- Led a team in developing scalable data storage solutions, improving efficiency in data retrieval and storage processes.</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Listen to Music</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Browsing Facebook</td>
            <td colspan="4" style={{ fontSize: '15px' }}>- Implemented and maintained security protocols for software applications, conducting regular code reviews to identify and mitigate potential vulnerabilities.</td>
          </tr>
          <tr>
            <th colspan="4" style={{ fontSize: '20px', backgroundColor: 'crimson', color: 'white' }}>ACHIEVEMENTS</th>
            <td colSpan="4">&nbsp;</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Participated in a hackathon, winning first place for a collaborative coding project (2016)</td>
            <th colSpan="4" style={{ fontSize: '20px', color: 'crimson' }}>ACADEMIC BACKGROUND</th>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Completed Bachelor's degree in Computer Engineering with honors (2018)</td>
            <td colspan="4" style={{ fontSize: '15px' }}>BACHELOR OF SCIENCE IN COMPUTER ENGINEERING</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Developed a real-time data processing system for a client, optimizing data handling by 30% (2019)</td>
            <td colspan="4" style={{ fontSize: '15px' }}>University of the Assumption | (2022 - 2026) - Cum Laude</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Attained Cisco Certified Network Associate (CCNA) certification (2023)</td>
            <td colspan="4" style={{ fontSize: '15px' }}>St. Vincent's Academy of Apalit Pampanga, INC. | (2020 - 2022) - With Honors</td>
          </tr>
          <tr>
            <td colspan="4" style={{ fontSize: '15px', backgroundColor: 'crimson', color: 'white' }}>- Completed a Master's degree in Computer Engineering, specializing in artificial intelligence (2025)</td>
            <td colspan="4" style={{ fontSize: '15px' }}>Telacsan National High School | (2020 - 2016) - Top 3</td>
          </tr>
          <tr>
            <td colspan="4" style={{ backgroundColor: 'crimson', color: 'white', fontSize: '15px' }}>&nbsp;</td>
            <td colspan="4">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div> 
      );
    };
    
    export default Resume;    