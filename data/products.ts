// ====================
// TYPES
// ====================

export type SubDetail = {
  name: string;
  description: string;
  features: string[];
};

export type CategoryData = {
  title: string;
  description: string;
  subs: string[]; // <-- يجب أن تبقى String[]
  images: string[];
  highlight: {
    title: string;
    text: string;
    image: string;
  };
  details: {
    materials: string[];
    benefits: string[];
    subDetails: Record<string, SubDetail>;
  };
};

// ====================
// FULL PRODUCTS DATA (FIXED & CLEAN)
// ====================

export const PRODUCTS_DATA: Record<string, CategoryData> = {
  curtains: {
    title: "الستائر",
    description:
      "مجموعة واسعة من الستائر الرول، البلاك آوت، الشيفون، الكلاسيكية، وستائر Day & Night، مع إمكانية إضافة محركات كهربائية. جميع الستائر بخامات عالية الجودة وأنظمة سحب قوية وانسيابية.",
    
    subs: ["roller", "blackout", "sheer", "motor"],

    images: ["/stara.png", "/stara.png", "/stara.png"],

    highlight: {
      title: "عرض خاص على ستائر البلاك آوت",
      text: "خصم 20% عند طلب ستائر بلاك آوت مع التركيب — العرض لفترة محدودة!",
      image: "/stara.png",
    },

    details: {
      materials: [
        "Blackout 100%",
        "Sheer شيفون",
        "Sunscreen رول",
        "Day & Night Double Layer",
        "PVC رول",
        "Linen قطن طبيعي",
      ],
      benefits: [
        "عزل ممتاز للضوء",
        "مقاومة للحرارة",
        "أنظمة مضادة للانحراف",
        "تفصيل حسب المقاسات",
        "محركات كهربائية اختيارية",
      ],

      subDetails: {
        roller: {
          name: "ستائر رول",
          description:
            "ستائر عملية وعصرية بتصميم بسيط يناسب المكاتب والغرف الحديثة. تمنح تحكما ممتازا في الإضاءة.",
          features: ["سهلة التنظيف", "مقاومة للشمس", "خيارات تعتيم متعددة"],
        },

        blackout: {
          name: "ستائر بلاك آوت",
          description:
            "ستائر سميكة لحجب الضوء بنسبة 100%، مثالية لغرف النوم وصالات السينما المنزلية.",
          features: ["عزل ضوئي كامل", "طبقة حماية حرارية", "مظهر فخم"],
        },

        sheer: {
          name: "ستائر شيفوون",
          description:
            "ستائر خفيفة تسمح بمرور الضوء وتعطي لمسة ناعمة وراقية للمكان.",
          features: ["إضاءة طبيعية", "خصوصية نهارية", "مظهر ناعم"],
        },

        motor: {
          name: "ستائر كهربائية",
          description:
            "ستائر تعمل عبر ريموت أو تطبيق جوال، ومتوافقة مع الأنظمة الذكية.",
          features: ["محركات Somfy", "تشغيل هادئ", "مناسبة للنوافذ الكبيرة"],
        },
      },
    },
  },

  // ===============================
  bedrooms: {
    title: "غرف النوم",
    description:
      "غرف نوم متكاملة مودرن وكلاسيك بخامات عالية الجودة مثل الخشب الطبيعي ومرايا LED.",
    
    subs: ["modern", "classic"],

    images: ["/bedroom.jpeg", "/bedroom2.jpeg", "/bedroom2.jpeg"],

    highlight: {
      title: "باقة غرفة نوم مودرن كاملة",
      text: "سرير + خزانة + كومود + إضاءة LED بسعر خاص.",
      image: "/bedroom2.jpeg",
    },

    details: {
      materials: ["خشب MDF", "خشب زان", "مرآة LED", "مخمل", "جلد صناعي"],
      benefits: [
        "ضمان 3 سنوات",
        "مقاومة للخدوش",
        "تفصيل حسب الطلب",
        "خيارات تخزين متعددة",
      ],

      subDetails: {
        modern: {
          name: "غرف نوم مودرن",
          description:
            "تصاميم عصرية بخطوط مستقيمة وألوان محايدة مع إضاءة LED مدمجة.",
          features: ["ألوان هادئة", "خطوط بسيطة", "خزائن سحب حديثة"],
        },

        classic: {
          name: "غرف نوم كلاسيك",
          description:
            "ديكور محفور بتفاصيل ذهبية وهيدبورد فاخر ذو طابع ملكي.",
          features: ["خشب طبيعي", "نقوش فاخرة", "ألوان راقية"],
        },
      },
    },
  },

  // ===============================
  sofas: {
    title: "الكنب",
    description:
      "كنب جاهز أو تفصيل مودرن وكلاسيك و L-Shape بخامات عالية الجودة.",
    
    subs: ["lshape", "salon"],

    images: ["/sofa.jpeg", "/sofa.jpeg", "/sofa.jpeg"],

    highlight: {
      title: "كنب L-Shape الجديد",
      text: "إسفنج بلوك ناشف، مريح جداً، وقماش قابل للتغيير.",
      image: "/sofa.jpeg",
    },

    details: {
      materials: ["خشب زان", "إسفنج بلوك", "Bouclé", "Velvet"],
      benefits: ["تفصيل كامل", "ضمان 3 سنوات", "أقمشة ضد البقع", "ألوان متعددة"],

      subDetails: {
        lshape: {
          name: "كنب L-Shape",
          description: "مناسب للعائلات والمساحات الكبيرة.",
          features: ["مريح جداً", "خزانة داخلية", "ألوان متعددة"],
        },

        salon: {
          name: "كنب صالون",
          description: "بتطريزات فاخرة يناسب المجالس الرسمية.",
          features: ["خشب محفور", "قماش فاخر", "ألوان ملكية"],
        },
      },
    },
  },

  // ===============================
  walls: {
    title: "تجليد الجدران",
    description:
      "تكسية الجدران بخامات خشبية، PVC، و Panels 3D مقاومة للرطوبة والخدوش.",
    
    subs: ["wood", "pvc", "3d"],

    images: ["/cover.jpeg", "/cover.jpeg", "/cover.jpeg"],

    highlight: {
      title: "خصم خاص على تجليد PVC",
      text: "سعر مميز للمتر مع تركيب بدون تكسير.",
      image: "/cover.jpeg",
    },

    details: {
      materials: ["PVC مقاوم للماء", "خشب HDF", "ألواح 3D Panels"],
      benefits: ["مقاوم للرطوبة", "يدوم لسنوات", "سهل التنظيف", "مناسب للمطابخ والحمامات"],

      subDetails: {
        wood: {
          name: "تجليد خشبي",
          description: "ألواح خشبية فاخرة تعطي إحساس دافئ وفخم.",
          features: ["ألوان متعددة", "متين", "طابع فاخر"],
        },

        pvc: {
          name: "تجليد PVC",
          description: "مقاوم للماء 100% ومثالي للمطابخ والحمامات.",
          features: ["مضاد للرطوبة", "سهل التنظيف", "سعر اقتصادي"],
        },

        "3d": {
          name: "ألواح 3D",
          description: "ألواح بارزة بتصاميم هندسية عصرية.",
          features: ["أشكال هندسية", "مظهر عصري", "خفيفة الوزن"],
        },
      },
    },
  },
};
