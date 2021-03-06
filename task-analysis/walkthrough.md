# Transcript Redesign

## The Problem

It's a many-layered step for students to request their transcripts on my IIT. Currently, there is no intuitive/comprehensive way to see/order transcripts. We propose to make this happen in as few clicks/taps as possible as well as reducing redundancy and clearing repetitive clutter. This redesign involves changing the way users:

1. Look up transcripts
2. Print simple pdf of transcript
3. Request official transcript to be mailed

## Login

Login page simplified to bare necessities: ![](https://github.com/marciano117/project_3_team/blob/master/task-analysis/login.png "login")

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

As the transcript displaying task currently works, it takes many clicks of folders within folders before the correct transcript appears. Even then, the user can't print out a pdf nor order an official transcript in the same menu. With the current framework and design for the transcripts, the page is a collection of frames. So in most browsers, trying to print the transcript from the page actually only prints the very first frame, which is typically the heading banner, as a result, students have to utilize a variety of methods to save their own transcripts. Other annoyances are an inability to request official electronic transcripts too.

We propose that when the user clicks/taps My Grades, a sub-menu of choices will appear, instead of the Banner Self-Service menu plethora: ![](https://github.com/marciano117/project_3_team/blob/master/task-analysis/transcript-steps.png "task")

1. Semester Grades (Midterm or Final, whichever is most recent)
2. Unofficial Transcript
3. Print Transcript
4. Request Official Transcript

Each choice will display the most recent grade/transcript. To see past years, users can click expand/see more to show full grade/record history. This skips the Transcript Options step that myIIT currently implements. ![](https://github.com/marciano117/project_3_team/blob/master/task-analysis/options.png "task")

In addition, we will work to reduce redundancies in the information and options that are presented to the student. Currently, the student Banner Self-Service menu is the most comprehensive option for students to access their grades, transcripts etc. However, the page is cluttered by unnecessary dialog boxes which present the exact same options, thus making it confusing for the user.
![](https://github.com/marciano117/project_3_team/blob/master/task-analysis/other-methods.png "task")

As seen above, there are two other options to view grades and request transcripts. Thus, we will attempt to reduce the redundancies and in our version of MyIIT, clear up any clutter. In doing so, we hope to create some comprehensive AND intuitive for the user that will allow them to do whatever tasks that they need without confusion and a hundred clicks.

Our redesign will show a submenu when users tap/click Request Official Transcript. The submenu will show a form to be filled out that asks for:  

1. Attn:
2. Student Name:
3. DOB:
4. A#:
5. Mailing Address:
6. Delivery Options:
7. Payment:
8. Email for receipt:

To navigate back, users will simply close the opened menu/submenu with the opposite up arrow close-up feature at the top of the screen or their phones’ back arrow.
