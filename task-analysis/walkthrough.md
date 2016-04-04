# Transcript Redesign

## The Problem

It's a many-layered step for students to request their transcripts on my IIT. We propose to make this happen in as few clicks/taps as possible. This involves:

1. Looking up transcripts
2. Printing simple pdf of transcript
3. Requesting official transcript to be mailed

## Login

Login page simplified to bare necessities: [See Login Image](https://github.com/marciano117/project_3_team/blob/master/task-analysis/login.png "login")

1. IIT logo
2. What user is logging into
3. Username/password field
4. Forgot password link
5. (Need to do: JS to determine whether user is undergraduate, graduate, or co-terminal 

## Welcome

Upon successful login, user will be directed to IIT welcome page. The welcome page will be simplified to the 6 main tasks users visit myIIT for:

1. My Schedule
2. My Grades
3. My Finances
4. My Blackboard
5. My Degree Works
6. My Email

A drop down list will appear when a tab is tapped/clicked. Our task, accessing transcripts, will be fully implemented under My Grades. The other tasks are there to show redesign, thus not fully functional.

## Task

When the user clicks/taps My Grades, a sub-menu of choices will appear, instead of the Banner Self-Service menu plethora: [![See Transcript-steps Image]("transcript-steps.png")](#task)

1. Semester Grades (Midterm or Final, whichever is most recent)
2. Unofficial Transcript
3. Print Transcript
4. Request Official Transcript 

Each choice will display the most recent grade/transcript. To see past years, users can click expand/see more to show full grade/record history. This skips the Transcript Options step that myIIT currently implements. [![See Options Image](options.png")](#task)

When users tap/click Request Official Transcript, the submenu will show a form to be filled out that asks for:  

1. Attn:
2. Student Name:
3. DOB:
4. A#: 
5. Mailing Address:
6. Delivery Options:
7. Payment:
8. Email for receipt:

To navigate back, users will simply close the opened menu/submenu with the opposite up arrow close-up feature at the top of the screen or their phones’ back arrow. 
