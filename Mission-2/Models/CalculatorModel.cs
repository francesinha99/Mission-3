using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission_2.Models
{
    public class CalculatorModel
    {
        [Range(0, 100)]
        public int assignments { get; set;}
        [Range(0, 100)]
        public int group { get; set; }
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Range(0, 100)]
        public int exams { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
        
    }
}
