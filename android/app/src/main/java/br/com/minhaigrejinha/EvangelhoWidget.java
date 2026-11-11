package br.com.minhaigrejinha;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.view.View;
import android.widget.RemoteViews;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import org.json.JSONArray;
import org.json.JSONObject;

public class EvangelhoWidget extends AppWidgetProvider {

    static final String PREFERENCIAS = "minhaigrejinha-widget";
    static final String CHAVE = "dias";

    @Override
    public void onUpdate(Context contexto, AppWidgetManager gerente, int[] ids) {
        desenhar(contexto, gerente, ids);
    }

    static void desenhar(Context contexto, AppWidgetManager gerente, int[] ids) {
        String hoje = new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(new Date());
        JSONObject dia = null;
        try {
            JSONArray dias = new JSONArray(contexto.getSharedPreferences(PREFERENCIAS, Context.MODE_PRIVATE).getString(CHAVE, "[]"));
            for (int i = 0; i < dias.length(); i++) {
                JSONObject d = dias.getJSONObject(i);
                if (hoje.equals(d.optString("data"))) {
                    dia = d;
                    break;
                }
            }
        } catch (Exception ignorado) {
            dia = null;
        }

        Intent abrir = new Intent(Intent.ACTION_VIEW, Uri.parse("br.com.minhaigrejinha://app/liturgia"), contexto, MainActivity.class);
        abrir.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent toque = PendingIntent.getActivity(contexto, 0, abrir, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        for (int id : ids) {
            RemoteViews vista = new RemoteViews(contexto.getPackageName(), R.layout.widget_evangelho);
            if (dia != null) {
                vista.setTextViewText(R.id.widget_titulo, dia.optString("titulo"));
                vista.setTextViewText(R.id.widget_evangelho, dia.optString("evangelho"));
                vista.setViewVisibility(R.id.widget_evangelho, View.VISIBLE);
            } else {
                vista.setTextViewText(R.id.widget_titulo, contexto.getString(R.string.widget_abrir));
                vista.setViewVisibility(R.id.widget_evangelho, View.GONE);
            }
            vista.setOnClickPendingIntent(R.id.widget_raiz, toque);
            gerente.updateAppWidget(id, vista);
        }
    }
}
