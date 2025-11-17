
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
}

export default function ExpandableText({ text, maxLines = 2 }: ExpandableTextProps) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="expandable-text">
      <p
        className={`description-text ${expanded ? "expanded" : "collapsed"}`}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : maxLines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {text}
      </p>
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? t("seeLess") : t("seeMore")}
        {expanded ? <FaChevronUp className="expand-icon" /> : <FaChevronDown className="expand-icon" />}
      </button>
    </div>
  );
}
