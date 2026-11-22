# Hermit and Fomalhaut

Hermit is a local web app. Swiss Ephemeris supplies chart and daily positions. The guide offers authored questions and opens Hermit's existing explanation and journal controls. Space uses Fomalhaut's coordinate and catalogue code to show the sky at the same instant, from the selected profile's coordinates or a labelled reference observer. Star positions and chart symbolism have separate presentations.

## Implementation and acceptance

1. Open Today on a fresh profile with external requests blocked. Restore an existing profile through the local chart endpoint. Simulate a failed restore and preserve the saved record.
2. Choose a theme, inspect its planet, record a fictional reflection, refresh and reopen it. Check a second profile independently.
3. Select a day and timezone in Calendar. In Space, search HIP 113368 and a planet. Check hemisphere, below-horizon objects and a failed catalogue load followed by retry.
4. Exercise invalid dates, unknown birth times, rapid changes, repeated visits, failed calculations, mobile controls and a fresh launch. Keep the most recent twelve daily results in memory per mounted workspace. Load the star pack only on demand.
5. Run the type checks, production build and Playwright journeys. Verify on offline Linux with the supplied browser and native Swiss binding before claiming evaluation-desktop compatibility.

Use fictional records for the evaluation. The original repository contains historical public-person fixtures and optional integrations; the entire development checkout is unsuitable as an evaluation upload. Verify the contents and licences of any upload independently. Do not open an evaluation workspace before approval.
