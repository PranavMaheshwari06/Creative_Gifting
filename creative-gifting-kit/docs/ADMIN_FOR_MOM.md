# Admin Experience for a Non-Technical Owner (the "Mom Test")

The admin is used by one person, on a phone, possibly while standing in a workshop with full hands.
If a feature needs explaining, redesign the feature.

## Principles
1. Phone first. Designed at 375px; works on tablet/laptop as a bonus.
2. Installable: a PWA with its own icon on the home screen ("Creative Gifting"). Opens like an app.
3. Five big tiles on the home screen, nothing else:
   - Add New Work      - See Enquiries (with a red count badge)
   - Change Banner     - Edit Contact Details
   - Customer Reviews  (and a small "Help" button)
4. Plain words. Never "CMS", "slug", "publish", "entity". Use "Show on website", "Hide", "Save".
   Hindi toggle on every screen.
5. Big and calm: body text >= 18px, buttons >= 52px tall, high contrast, one action per screen,
   bottom navigation within thumb reach, no tables, no tiny icons without labels.
6. Forgiving: everything auto-saves as a draft; "Hide" instead of "Delete"; Trash keeps items 30
   days; every destructive action asks in a full sentence ("Remove this photo from the website?").
   Undo toast for 8 seconds after any change.
7. Instant feedback: after saving, show "Done! Your work is now on the website" with a "View on
   website" button.
8. Never show an error code. Say what happened and what to do next.

## Core flows (maximum taps shown)
A. Add New Work (target: under 90 seconds)
   Tap "Add New Work" -> choose photos from camera or gallery (multi-select) -> photos auto-rotate,
   compress and upload with a progress bar -> pick occasion (large chips: Wedding, Baby, Festive,
   Corporate, Custom) -> type a short title -> optional description (phone keyboard mic works for
   voice typing) -> big "Show on website" button.
B. See Enquiries
   List of cards, newest first. Each card: name, occasion + date, time received, coloured status chip.
   Buttons on each card: Call (tel link), WhatsApp (pre-filled polite reply in a template mom can
   edit once in settings), and "Mark as done". Tap card for full message + private notes.
C. Change Banner
   Tap "Change Banner" -> current banner shown -> "Choose new photo" -> crop guide overlay (so the
   picture fits) -> headline and one line of text -> "Show on website".
D. Edit Contact Details
   Phone, WhatsApp number, email, address, working hours, Instagram/Facebook/YouTube links. Each field
   has a plain label and an example. Validate numbers (e.g. 10-digit Indian mobile) with friendly messages.
E. Customer Reviews
   Add review: name, occasion, text, optional photo, "Show / Hide" toggle.
F. Menu and page text are editable from a "More" screen (kept out of the main five tiles).

## Login for mom
Follows the 2-step spec in PROJECT_BRIEF.md section 6, softened by D1 (trusted phone for 30 days)
and a 30-day sliding session. The password field must allow phone autofill / password managers.
The captcha must be large, clear and refreshable. The OTP screen: big 4 boxes, auto-focus, auto-fill
from SMS/email suggestion where the browser allows, "Send again" after 60 s, friendly text such as
"We have sent a 4-digit code to your email".

## Notifications
New enquiry -> immediate email to the owner (subject: "New enquiry from <name> — <occasion>").
Also web push notification on the installed PWA (works on Android; on iPhone only after adding to
Home Screen — document this). WhatsApp auto-alerts are a v2 item.

## Handover kit (developer does this at launch)
- Install the PWA on mom's phone and save the login in the phone's password manager.
- Record three 30-second screen videos in Hindi/English (add work, see enquiry, change banner) and
  place them behind the Help button.
- A "Need help?" button that opens WhatsApp to the developer's number.
- Export button: download all enquiries (CSV) and a backup reminder monthly.

## Acceptance: the Mom Test
With no coaching, in a real phone, the owner completes each task within the limit:
1. Log in on a new phone ............................. 3 min
2. Add a new work with 4 photos ...................... 2 min
3. Hide a work and bring it back from Trash ......... 1 min
4. Find today's enquiry, call the person, mark done . 1 min
5. Change the banner image and headline .............. 2 min
6. Change the WhatsApp number ........................ 1 min
7. Add a customer review ............................. 2 min
If she fails any task, fix the screen (not the person) and re-test.
