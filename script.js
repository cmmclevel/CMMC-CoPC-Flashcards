let currentCard = 0;
const questions = [
	{ question: " 	What CoPC Practice? Refrain from dishonesty in all dealings with colleagues, clients, trainees, and others with whom you interact in your role as a Credentialed, Registered person or organization.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Fulfill all commitments as defined by the contract, methods, or license, certification, or registration agreements.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Do not mislead or exaggerate the services that your organization is authorized to deliver.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Do not mislead or exaggerate the services that you, as a credentialed or registered individual, are authorized to deliver.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? As an organization, ensure that only CMMC-AB Credentialed individuals are delivering CMMC assessment or training services.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Deliver CMMC services according to the agreements with your customer and the CMMC Accreditation Body.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Do not misrepresent your organization, such as selling services for which you are not authorized to deliver, falsifying records or experience, or proposing fees that are far below the level of effort that is required.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Avoid all Conflicts of Interest to the extent possible. When conflicts are unavoidable, disclose them transparently to affected stakeholders, including your own organization and your customer. Take action to minimize the impact or eliminate the conflict.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Under no circumstances are credentialed or registered individuals permitted to conduct a certified assessment, or participate on a certified assessment team, if they have also served as a consultant to prepare the organization for that assessment. Consulting is defined as “providing direct assistance to the creation of processes, training, and technology required to meet the intent of CMMC controls and processes.”	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? For CMMC-AB C3PAOs, ensure that when your sponsored CMMC-Credentialed individuals are performing services for another party, they do not actively solicit business from the customer for themselves or your organization. When approached by a customer while performing these services, advise them to contact your organization directly.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Do not make guarantees of assessment results. This includes guarantees that an Organization will succeed in their assessment if they engage with a credentialed individual or authorized organization, or the offer of a “money back” guarantee.	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? As a CMMC-AB Industry Working Group member, do not represent yourself as a CMMC AB employee or member. All references to the AB in social media must be clearly marked as “volunteer.”	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Practice? Protect identifiable and confidential customer data from unauthorized disclosure, unless permitted in writing by the CMMC-AB or from a legal obligation to disclose the information.	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Practice? Exercise due care to ensure that confidential or privileged information gathered during assessments or consulting remains so, even after a work engagement has ended.	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Practice? Do not copy materials or tools from external entities without explicit permission to do so.	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Practice? Do not share working group materials or conversations outside of the working group. Do not post working group decisions or conversations on social media.	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Practice? Maintain current knowledge of CMMC materials. Revlevant materials may include, but are not limited to A-I Guides./Agreements/CAP/COI/WG Deliverables	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? Maintain compliance with CMMC-AB materials and methods.	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? Do not create derivative works using CMMC-AB or DOD Intellectual Property without explicit written permission from the CMMC Accreditation Body.	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? For Assessors or assessment team members, participate actively and respect the boundaries of the role you are performing. Do not use the influence of a role in a manner that is inconsistent with the Assessment method or guide.	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? Do not make assertions about outcomes or assessments, training classes, exams, or other results before or during any CMMC event you are participating in.	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? Do not unfairly influence outcomes in any way, including coaching people to provide false or misleading information, providing answers or hints to exam questions, creating documentation that is not actually used, or offering competing services.	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? Do not distribute Working Group materials for any purpose other than collaboration within the working group.	", answer: "	Adherence to Materials & Methods	 " },
	{ question: " 	What CoPC Practice? Report results and data from Assessments Training objectively, completely, clearly, and accurately.	", answer: "	Information Integrity	 " },
	{ question: " 	What CoPC Practice? Ensure the accuracy and authenticity of information.	", answer: "	Information Integrity	 " },
	{ question: " 	What CoPC Practice? Ensure the security of all information discovered or received during the course of delivering CMMC services.	", answer: "	Information Integrity	 " },
	{ question: " 	What CoPC Practice? Do not cheat, assist another in cheating, or allow cheating on examinations. Cheating includes unauthorized reproducing, distributing, displaying, discussing, sharing or otherwise misusing test questions or any part of test questions before, during or after an examination.	", answer: "	Information Integrity	 " },
	{ question: " 	What CoPC Practice? Do not employ deceptive means, including submitting to the CMMC-AB or a CMMC-AB C3PAO any document or testimony that contains a misstatement of fact or omits a fact to obtain, attempt to obtain, or assist others in obtaining or maintaining a CMMC Credential, Accreditation, or Registration.	", answer: "	Information Integrity	 " },
	{ question: " 	What CoPC Practice? Do not fill out evaluation materials for others	", answer: "	Information Integrity	 " },
	{ question: " 	What CoPC Practice? Do not violate any customer or third-party intellectual property rights during the delivery of CMMC services.	", answer: "	Respect for Intellectual Property	 " },
	{ question: " 	What CoPC Practice? Do not infringe on copyrights, trademarks, and logos. Give appropriate references and credit to CMMC-Credentialed materials and sources.	", answer: "	Respect for Intellectual Property	 " },
	{ question: " 	What CoPC Practice? Do not use CMMC-AB logos, trademarks, or copyrighted material without explicit and written permission from the CMMC-AB, and do not misrepresent yourself as holding a CMMC Credential, Registration, or Accreditation.	", answer: "	Respect for Intellectual Property	 " },
	{ question: " 	What CoPC Practice? Unless such permission is included in your agreement, always obtain written permission for distributing or changing materials, and for including materials in other works.	", answer: "	Respect for Intellectual Property	 " },
	{ question: " 	What CoPC Practice? Working group members must sign and adhere to the “Assignment of Intellectual Property” agreement provided by the AB.	", answer: "	Respect for Intellectual Property	 " },
	{ question: " 	What CoPC Practice? Behave in a manner that is lawful and upholds accepted ethical standards of professional practice and conduct in all activities related to carrying out your role in the CMMC ecosystem.	", answer: "	Lawful and Ethical Practices	 " },
	{ question: " 	What CoPC Practice? Refrain from harassment or discrimination, sexual or in other forms, in all interactions with individuals whom you encounter in connection with activities that relate to carrying out your role in the CMMC ecosystem.	", answer: "	Lawful and Ethical Practices	 " },
	{ question: " 	What CoPC Practice? Do not commit any crime of fraud, larceny, embezzlement, misappropriation of funds, misrepresentation, perjury, false swearing, conspiracy to conceal, or a similar offense in any legal proceeding, civil or criminal, whether or not in connection with activities that relate to carrying out your role in the CMMC ecosystem.	", answer: "	Lawful and Ethical Practices	 " },
	{ question: " 	What CoPC Practice? Report to the CMMC-AB within 30 days of convictions, guilty pleas, or no contest pleas to crimes of fraud, larceny, embezzlement, misappropriation of funds, misrepresentation, perjury, false swearing, conspiracy to conceal, or a similar offense in any legal proceeding, civil or criminal, wheter or not in connection with activities that relate to carrying out your role in the CMMC ecosystem	", answer: "	Lawful and Ethical Practices	 " },
	{ question: " 	What CoPC Principle? Always maintain a professional Business posture	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Principle? Never represent yourself (or company) not aligned with certifications	", answer: "	Professionalism	 " },
	{ question: " 	What CoPC Principle? Avoid confilicts of interest (and appearance of)	", answer: "	Objectivity	 " },
	{ question: " 	What CoPC Principle? Remain in compliance with conflict of interest polices as part of agreements	", answer: "	Objectivity	 " },
	{ question: " 	What CoPC Principle? Where perceived conflict may be present - Document and describe the conflict to all affected parties - Secure agreement before continuing	", answer: "	Objectivity	 " },
	{ question: " 	What CoPC Principle? Keep customer information confidential (e.g., data, trade secrets, strategies, security postures, personal information)	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Principle? Treat with utmost care	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Principle? Do not reveal information learned to anyone not authorized to view/hear it	", answer: "	Confidentiality	 " },
	{ question: " 	What CoPC Principle? Demonstrate integrity in the use of materials and methodes described by the AB - Related to Adherence to Materials and methods	", answer: "	Proper use of methods	 " },
	{ question: " 	What CoPC Principle? Act in a manner consistent with the intent of the materials to preserve the integrity of the services delivered - Related to Adherence to Materials and methods	", answer: "	Proper use of methods	 " },
	{ question: " 	What CoPC Principle? Report results completely and with integrity	", answer: "	Information integrity	 " }

	
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function flipCard() {
    const flashcard = document.querySelector('.flashcard');
    flashcard.classList.toggle('flipped'); // Toggle the 'flipped' class on click
}

function nextCard() {
    currentCard = (currentCard + 1) % questions.length;
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    questionElement.innerText = questions[currentCard].question;
    answerElement.innerText = questions[currentCard].answer;
    document.querySelector('.flashcard').classList.remove('flipped');
}

document.addEventListener('DOMContentLoaded', () => {
    shuffleArray(questions); // Shuffle the questions when the page loads
	nextCard(); // Initialize the first card
});
