#!/bin/sh
set -e
if test "$CONFIGURATION" = "Debug"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW3
  make -f /Users/zhangyang/Documents/Assignments/CG/HW3/CMakeScripts/ReRunCMake.make
fi
if test "$CONFIGURATION" = "Release"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW3
  make -f /Users/zhangyang/Documents/Assignments/CG/HW3/CMakeScripts/ReRunCMake.make
fi
if test "$CONFIGURATION" = "MinSizeRel"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW3
  make -f /Users/zhangyang/Documents/Assignments/CG/HW3/CMakeScripts/ReRunCMake.make
fi
if test "$CONFIGURATION" = "RelWithDebInfo"; then :
  cd /Users/zhangyang/Documents/Assignments/CG/HW3
  make -f /Users/zhangyang/Documents/Assignments/CG/HW3/CMakeScripts/ReRunCMake.make
fi

