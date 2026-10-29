import re, sys
path = sys.argv[1] if len(sys.argv) > 1 else "index.html"
h = open(path, encoding="utf-8").read()
# 1. remove every YouTube link
h = re.sub(r'<a [^>]*youtube\.com[^>]*>[^<]*</a>', '', h)
# 2. remove the YouTube sentence from About
h = re.sub(r',? and run a YouTube channel \(@rankzilla23\) with Shorts-based comedy and ranking content', '', h)
h = h.replace('I write research papers and blogs, practice problem solving on LeetCode.', 'I write research papers and blogs and practice problem solving on LeetCode.')
# 3. add the responsive CSS once
css = open(__file__.replace("apply_patch.py", "responsive-patch.css"), encoding="utf-8").read()
if "RESPONSIVE PATCH" not in h:
    h = h.replace("</style>", css + "\n</style>", 1)
open(path, "w", encoding="utf-8").write(h)
print("done; youtube mentions left:", len(re.findall(r'(?i)youtube', h)))
