import { TEditorConfiguration } from '../../documents/editor/core';

const WELCOME: TEditorConfiguration = {
  "root": {
    "type": "EmailLayout",
    "data": {
      "backdropColor": "#232f67",
      "borderColor": "#e22324",
      "borderRadius": 8,
      "canvasColor": "#FFFFFF",
      "textColor": "#232f67",
      "fontFamily": "MODERN_SANS",
      "childrenIds": [
        "block-1777347169290",
        "block-1777347433726",
        "block-1777348294661",
        "block-1777347430848",
        "block-1777348084332",
        "block-1777347963417"
      ]
    }
  },
  "block-1777347169290": {
    "type": "Image",
    "data": {
      "style": { "padding": { "top": 16, "bottom": 4, "right": 24, "left": 24 } },
      "props": {
        "url": "https://assets.softr-files.com/applications/354d3ed5-1c39-423a-87d8-8f042b241d03/assets/a9fa5e18-d1ef-4bf5-9752-b5837d5e43ce.jpeg",
        "alt": "USA Logo",
        "linkHref": null,
        "contentAlignment": "middle"
      }
    }
  },
  "block-1777347430848": {
    "type": "Text",
    "data": {
      "props": { "text": "Body content goes here." },
      "style": { "padding": { "top": 16, "bottom": 16, "left": 24, "right": 24 }, "fontWeight": "normal" }
    }
  },
  "block-1777347433726": {
    "type": "Heading",
    "data": {
      "props": { "text": "Subject" },
      "style": {
        "color": "#e22324",
        "textAlign": "center",
        "padding": { "top": 0, "bottom": 0, "right": 24, "left": 24 }
      }
    }
  },
  "block-1777347963417": {
    "type": "Html",
    "data": {
      "style": { "fontSize": 16, "textAlign": null, "padding": { "top": 0, "bottom": 16, "right": 24, "left": 24 } },
      "props": {
        "contents": "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"margin-top:10px;\">\n  <tr>\n    <td align=\"center\" style=\"background-color:#232f67; padding:24px 20px;\">\n      <p style=\"margin:0; font-family:Georgia, serif; font-size:16px; font-style:italic; color:#ffffff; line-height:1.5;\">\n        &ldquo;Pray for the dead, and fight like hell for the living.&rdquo;\n      </p>\n      <p style=\"margin:6px 0 0; font-family:Arial, sans-serif; font-size:12px; color:#e22324; letter-spacing:1px; text-transform:uppercase;\">\n        &mdash; Mother Jones\n      </p>\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"background-color:#f5f5f5; padding:20px;\">\n      <p style=\"margin:0; font-family:Arial, sans-serif; font-size:13px; color:#555555; line-height:1.6;\">\n        In solidarity, the United Staff Association stands together for every member <br>&mdash; active, retired, and yet to come.\n      </p>\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"background-color:#ffffff; padding:24px 20px; border-top:3px solid #e22324;\">\n      <p style=\"margin:0 0 12px; font-family:Arial, sans-serif; font-size:13px; color:#232f67; font-weight:bold;\">\n        United Staff Association\n      </p>\n      <p style=\"margin:0 0 16px; font-family:Arial, sans-serif; font-size:12px; color:#777777; line-height:1.5;\">\n        6 Tournament Dr.<br>\n        Leonardo, NJ 07737 &middot; United States\n      </p>\n      <p style=\"margin:0 0 16px; font-family:Arial, sans-serif; font-size:12px; color:#777777; line-height:1.5;\">\n        You are receiving this email because you are a current or retired member of the USA.<br>\n        We respect your privacy and never share your information with third parties.\n      </p>\n      <p style=\"margin:0 0 8px; font-family:Arial, sans-serif; font-size:12px;\">\n        <a href=\"{$unsubscribe}\" style=\"color:#232f67; text-decoration:underline;\">Unsubscribe</a>\n        <span style=\"color:#cccccc; margin:0 8px;\">|</span>\n        <a href=\"https://www.usaofnj.org/terms-conditions\" style=\"color:#232f67; text-decoration:underline;\">Terms of Service</a>\n        <span style=\"color:#cccccc; margin:0 8px;\">|</span>\n        <a href=\"https://www.usaofnj.org/privacy-policy\" style=\"color:#232f67; text-decoration:underline;\">Privacy Policy</a>\n        <span style=\"color:#cccccc; margin:0 8px;\">|</span>\n        <a href=\"https://www.usaofnj.org/beck-notice\" style=\"color:#232f67; text-decoration:underline;\">Beck Notice</a>\n      </p>\n      <p style=\"margin:12px 0 0; font-family:Arial, sans-serif; font-size:11px; color:#aaaaaa;\">\n        &copy; United Staff Association. All rights reserved.\n      </p>\n    </td>\n  </tr>\n</table>"
      }
    }
  },
  "block-1777348084332": {
    "type": "Divider",
    "data": {
      "style": { "padding": { "top": 16, "bottom": 0, "right": 24, "left": 24 } },
      "props": { "lineColor": "#e22324", "lineHeight": 3 }
    }
  },
  "block-1777348294661": {
    "type": "Divider",
    "data": {
      "style": { "padding": { "top": 12, "bottom": 16, "right": 40, "left": 28 } },
      "props": { "lineColor": "#232f67" }
    }
  }
};

export default WELCOME;
